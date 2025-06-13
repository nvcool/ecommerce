import { SettingsForm } from "./SettingsForm";

export const SettingsContent = () => {
  return (
    <section className="bg-white-900 flex flex-col rounded-lg">
      <h1 className="border-white-200 text-black-900 mb-16 border-b px-12 py-8 text-lg font-medium">
        Settings
      </h1>
      <SettingsForm />
    </section>
  );
};
