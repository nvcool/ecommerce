import { AdminHeader } from "../AdminHeader";
import { SettingsContent } from "./SettingsContent";

export const Settings = () => {
  return (
    <section>
      <AdminHeader
        breadcrumbs={[
          { link: "/admin/dashboard", text: "Admin" },
          { text: "Settings" },
        ]}
      />
      <SettingsContent />
    </section>
  );
};
