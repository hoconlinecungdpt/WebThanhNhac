import { CgSpinner } from 'react-icons/cg'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <CgSpinner className="w-8 h-8 text-primary animate-spin" />
    </div>
  )
} 