import { getLayout } from "../../components/Layout"
import withAuthUser from "../../hocs/withAuthUser"

function HomePage () {
  return <h1>Hola por testear</h1>
}

HomePage.getLayout = getLayout

export default withAuthUser(HomePage)
