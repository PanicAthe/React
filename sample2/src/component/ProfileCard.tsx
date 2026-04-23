type ProfileCardProps = {
  name: string;
  role: string;
  score: number;
  isOnline: boolean;
};

export default function ProfileCard({
  name,
  role,
  score,
  isOnline,
}: ProfileCardProps) {
  return (
    <section
      style={{
        border: '1px solid #d9d9d9',
        borderRadius: 12,
        padding: 12,
        marginTop: 12,
      }}
    >
      <h2 style={{ margin: 0 }}>{name}</h2>
      <p style={{ margin: '8px 0 0' }}>role: {role}</p>
      <p style={{ margin: '4px 0 0' }}>score: {score}</p>
      <p style={{ margin: '4px 0 0' }}>
        status: {isOnline ? 'online' : 'offline'}
      </p>
    </section>
  );
}
