const collegeDataLoader = async () => {
    const loadCollege = await fetch('college.json');
    const totalCollege = await loadCollege.json();
    return totalCollege;
}
export default collegeDataLoader;