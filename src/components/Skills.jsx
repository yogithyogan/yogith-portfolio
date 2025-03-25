export default function Skills() {
    const skills = [
      { name: 'HTML', level: 90 },
      { name: 'CSS/Tailwind', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 70 },
      { name: 'UI/UX Design', level: 75 },
    ];
  
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            My <span className="text-indigo-600">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }