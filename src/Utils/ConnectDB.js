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
    const isDuplicate = install.some((p) => p.id === app.id);
    if (isDuplicate) return alert("Already Added in the Install");
    const updateInstall = [...install, app];
    localStorage.setItem("install", JSON.stringify(updateInstall));
  } catch (err) {
    console.log(err);
  }
};

