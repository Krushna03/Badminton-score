export default function Button({ label, color, ...props }) {
  const colorClasses = {
    green: 'bg-green-500 hover:bg-green-400 active:bg-green-600',
    red: 'bg-red-500 hover:bg-red-400 active:bg-red-600',
  }

  return (
    <button
      className={`w-24 h-24 rounded-full ${colorClasses[color]} text-white text-4xl font-bold shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-${color}-300`}
      aria-label={`${label} button`}
     {...props}
    >
      {label}
    </button>
  )
}