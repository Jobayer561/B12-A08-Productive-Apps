export const loadInstall = () => {
  try {
    const data = localStorage.getItem("install");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const updateList = (app) => {
  const install = loadInstall();
  try {
   
    const updateInstall = [...install, app];
    localStorage.setItem("install", JSON.stringify(updateInstall));
  } catch (err) {
    console.log(err);
  }
};
export const Uninstall = (id) => {
  const install = loadInstall();
  try {
    const updateInstall = install.filter((p) => p.id !== id);
    localStorage.setItem("install", JSON.stringify(updateInstall));
  } catch (err) {
    console.log(err);
  }
};
