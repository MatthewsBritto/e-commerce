import HeaderCheckout from './header-checkout'
import Payament from './payament'

export default function ContainerCheckout() {
  return (
    <div>
      <HeaderCheckout />
      <div className="flex  rounded-md  overflow-hidden">
        <Payament />
      </div>
    </div>
  )
}
