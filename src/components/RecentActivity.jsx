export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'task',
      action: 'completed',
      title: 'Dashboard UI Design',
      time: '10 minutes ago',
      user: 'You'
    },
    {
      id: 2,
      type: 'project',
      action: 'created',
      title: 'Marketing Campaign',
      time: '1 hour ago',
      user: 'Alex Johnson'
    },
    {
      id: 3,
      type: 'meeting',
      action: 'scheduled',
      title: 'Team Sync',
      time: '2 hours ago',
      user: 'Maria Garcia'
    },
    {
      id: 4,
      type: 'file',
      action: 'uploaded',
      title: 'Q3 Report.pdf',
      time: '5 hours ago',
      user: 'You'
    },
    {
      id: 5,
      type: 'comment',
      action: 'added',
      title: 'On homepage redesign',
      time: 'Yesterday',
      user: 'Sam Wilson'
    }
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'task': return <TaskActivityIcon />
      case 'project': return <ProjectActivityIcon />
      case 'meeting': return <MeetingActivityIcon />
      case 'file': return <FileActivityIcon />
      case 'comment': return <CommentActivityIcon />
      default: return <DefaultActivityIcon />
    }
  }

  return (
    <div className="space-y-4">
      {activities.map(activity => (
        <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="flex-shrink-0 mt-1">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              {getActivityIcon(activity.type)}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              <span className="capitalize">{activity.user}</span> {activity.action} {activity.title}
            </p>
            <p className="text-sm text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Activity Icons
const TaskActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
)

const ProjectActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </svg>
)

const MeetingActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const FileActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

const CommentActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const DefaultActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)