const collegeDataLoader = async () => {
    const loadCollege = await fetch('https://college-book-server-beta.vercel.app/colleges');
    const totalCollege = await loadCollege.json();
    return totalCollege;
}
export default collegeDataLoader;