const collegeDataLoader = async () => {
    const loadCollege = await fetch('http://localhost:5000/colleges');
    const totalCollege = await loadCollege.json();
    return totalCollege;
}
export default collegeDataLoader;