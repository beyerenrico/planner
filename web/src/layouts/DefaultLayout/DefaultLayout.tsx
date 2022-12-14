import Main from './_main'
import Sidebar from './_sidebar'
import Topbar from './_topbar'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <div className="text-white">Planner</div>
          </div>
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Topbar />
        <Main>{children}</Main>
      </div>
    </div>
  )
}

export default DefaultLayout
