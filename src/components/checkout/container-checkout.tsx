import CheckAdress from './adress'
import CheckItems from './check-items'
import HeaderCheckout from './header-checkout'
import Payament from './payament'

export default function ContainerCheckout() {
  return (
    <div>
      <HeaderCheckout />
      <div className="flex  rounded-md  overflow-hidden">
        <CheckAdress />
        {/* <CheckItems /> */}
        {/* <Payament /> */}
      </div>
    </div>
  )
}
