
export default async function MyGitprojects(){
  try {
    
    const response = await fetch('https://api.github.com/users/zango-tut/repos');
      const data = await response.json();
      console.log(data)
      const filteredProjects = data.map(repo => ({
        name: repo.name,
        description: repo.description,
        demo: repo.homepage, // usually a live site if set in repo settings
        github: repo.html_url,
        image: `https://raw.githubusercontent.com/zango-tut/${repo.name}/refs/heads/main/assest/preview.png`
      }))
      return filteredProjects

  } catch (error) {
    throw error
  } 
}