const getStoredApps =()=>{
    const stored=localStorage.getItem("app");
    if (stored) {
        const storyAppsData = JSON.parse(stored);
        return storyAppsData
    } else {
        return [];
    }
}
const removeFfromsLS =(id)=>{
    const storedApps=getStoredApps();
    const remaining=storedApps.filter(appId => appId !== id);
    localStorage.setItem("app",JSON.stringify(remaining));
}
const clearAlls = ()=>{
    localStorage.removeItem("app")
}
export {removeFfromsLS,clearAlls}