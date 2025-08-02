import CreateCustomerComponent from "./CreateCustomerComponent";
import CustomerComponent from "./CustomerComponent";
import UpdateCustomerComponent from "./UpdateCustomerComponent";

export default function page() {
  return (
    <div>
      <CustomerComponent/>
      <CreateCustomerComponent/>
      <UpdateCustomerComponent/>
    </div>
  )
}
