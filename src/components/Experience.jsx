import { Fragment, useState } from "react";
import { Role } from "./Role";

export function Experience({ onSave }) {
  const [roles, setRoles] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [openedRoleId, setOpenedRoleId] = useState("");

  function toggleAddRoleForm() {
    setIsActive(!isActive);
  }

  function toggleCurrentRoleForm(id) {
    id === openedRoleId ? setOpenedRoleId("") : setOpenedRoleId(id);
  }

  function saveRole(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let savedRole = Object.fromEntries(formData);
    const roleIndex = roles.findIndex((role) => role.id === savedRole.id);
    let newRoles = [...roles];
    if (roleIndex === -1) {
      // add new role
      savedRole.id = crypto.randomUUID();
      newRoles.push(savedRole);
      setRoles(newRoles);
      toggleAddRoleForm();
    } else {
      // update existing role
      newRoles[roleIndex] = savedRole;
      setRoles(newRoles);
      setOpenedRoleId("");
    }
    onSave({ experience: newRoles });
  }

  function deleteRole(id) {
    const roleIndex = roles.findIndex((role) => role.id === id);
    let newRoles = [...roles];
    newRoles.splice(roleIndex, 1);
    setRoles(newRoles);
    setOpenedRoleId("");
  }

  return (
    <section id="experience">
      <h2>Experience</h2>
      {roles.map((role) => (
        <Fragment key={role.id}>
          <div
            key={role.id + "list"}
            onClick={() => toggleCurrentRoleForm(role.id)}
          >
            {role.title}
          </div>
          {openedRoleId === role.id && (
            <Role
              {...role}
              key={role.id + "form"}
              onSave={saveRole}
              onDelete={deleteRole}
            />
          )}
        </Fragment>
      ))}
      {isActive && <Role onSave={saveRole} />}
      <button onClick={toggleAddRoleForm}>Add role</button>
    </section>
  );
}
