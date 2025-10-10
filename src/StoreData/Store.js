const getStoryApps = () => {
    const storyApps = localStorage.getItem("app")
    if (storyApps) {
        const storyAppsData = JSON.parse(storyApps);
        return storyAppsData
    } else {
        return [];
    }
}
const addToLS = (id) => {
    const storedAppsData = getStoryApps();
    if (!storedAppsData.includes(id)) {
        storedAppsData.push(id);
        const data = JSON.stringify(storedAppsData)
        localStorage.setItem("app", data)
    }
}
export { addToLS, getStoryApps }