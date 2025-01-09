interface StatCardProps {
  title: string
  value: string
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="dark:bg-custom-blue bg-custom-dullGray text-center p-4 lg:p-6 rounded-lg overflow-hidden">
      <div className="text-stat-title-sm lg:text-stat-title-lg font-bold truncate">{title}</div>
      <div className="text-stat-value-sm lg:text-[72px] xl:text-stat-value-lg font-medium leading-none">
        {value}
      </div>
    </div>
  )
}
