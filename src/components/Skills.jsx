export default function Skills() {
  const technicalSkills = [
    { name: 'Frontend', level: 94, icon: '💻' },
    { name: 'Backend', level: 86, icon: '⚙️' },
    { name: 'React', level: 92, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Spring Boot', level: 86, icon: '🌱' },
    { name: 'Flutter', level: 83, icon: '📱' },
    { name: 'UI/UX', level: 97, icon: '🎨' },
    { name: 'APIs', level: 84, icon: '🔗' },
  ];

  const managementSkills = [
    { name: 'Project Mgmt', level: 90, icon: '📊' },
    { name: 'Team Lead', level: 88, icon: '👥' },
    { name: 'Agile', level: 85, icon: '🔄' },
    { name: 'Delegation', level: 87, icon: '📝' },
    { name: 'Communication', level: 89, icon: '🗣️' },
    { name: 'Planning', level: 91, icon: '📅' },
  ];

  const contentSkills = [
    { name: 'Tech Writing', level: 88, icon: '✍️' },
    { name: 'Content Strategy', level: 85, icon: '🧠' },
    { name: 'Documentation', level: 90, icon: '📄' },
    { name: 'Blogging', level: 83, icon: '📝' },
    { name: 'Editing', level: 86, icon: '✏️' },
  ];

  const ProgressBar = ({ level, color }) => {
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div 
          className={`h-1.5 rounded-full ${color}`}
          style={{ width: `${level}%` }}
        />
      </div>
    );
  };

  const SkillCategory = ({ title, skills, color }) => {
    const colorMap = {
      'indigo': {
        bg: 'bg-indigo-500',
        text: 'text-indigo-500',
        light: 'bg-indigo-100 dark:bg-indigo-900'
      },
      'emerald': {
        bg: 'bg-emerald-500',
        text: 'text-emerald-500',
        light: 'bg-emerald-100 dark:bg-emerald-900'
      },
      'amber': {
        bg: 'bg-amber-500',
        text: 'text-amber-500',
        light: 'bg-amber-100 dark:bg-amber-900'
      }
    };

    const colors = colorMap[color.split('-')[2]]; // Extract color from border-t-{color}-500

    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm ${color} border-t-4`}>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">{title}</h3>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{skill.icon}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
                <span className={`text-xs font-medium ${colors.text}`}>
                  {skill.level}%
                </span>
              </div>
              <ProgressBar level={skill.level} color={colors.bg} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Technical Expertise" 
            skills={technicalSkills} 
            color="border-t-indigo-500" 
          />
          
          <SkillCategory 
            title="Management & Leadership" 
            skills={managementSkills} 
            color="border-t-emerald-500" 
          />
          
          <SkillCategory 
            title="Content Creation" 
            skills={contentSkills} 
            color="border-t-amber-500" 
          />
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-t-4 border-t-purple-500">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Skill Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-3">
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl">📱</div>
              <div>
  <h4 className="font-medium text-gray-800 dark:text-gray-200">Component Architecture</h4>
  <p className="text-sm text-gray-600 dark:text-gray-400">
    Designing modular, maintainable UI components for complex applications
  </p>
</div>
            </div>

            <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-3">
              <div className="text-purple-600 dark:text-purple-400 text-2xl">💻</div>
              <div>
      <h4 className="font-medium text-gray-800 dark:text-gray-200">Performance Tuning</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        React memoization, code splitting, and bundle optimization
      </p>
    </div>
            </div>
            
            <div className="bg-emerald-50 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-3">
              <div className="text-emerald-600 dark:text-emerald-400 text-2xl">📈</div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200">Project Organization</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Structuring complex projects</p>
              </div>
            </div>
            
            <div className="bg-amber-50 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-3">
              <div className="text-amber-600 dark:text-amber-400 text-2xl">✍️</div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200">Technical Writing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Documentation & guides</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}