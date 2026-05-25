export default function ProjectCard({ title, role, date, description, techStack }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '24px', 
      marginBottom: '20px', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: '#555', fontSize: '0.9rem', marginTop: '-10px' }}>
        <strong>{role}</strong> | {date}
      </p>
      <p>{description}</p>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            style={{ 
              backgroundColor: '#e2e8f0', 
              padding: '4px 10px', 
              borderRadius: '16px', 
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}