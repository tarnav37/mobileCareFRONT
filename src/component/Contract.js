import React from 'react'
import './Contract.css'
import ContractForm from './ContractForm'


const Contract = () => {
  return (
    <div>
      <div className="care-box">
<h1>Phone Buying Contract</h1>
<hr color='b'/>
<br />
<p>➛ You the customer authorize Mobile Care to purchase your personal device, with the understanding that once agreed amount has been given for the device, there will be no returns.</p><br />
<p>➛ You the customer understand that Mobile Care will run the device for non-payments, stolen, lost, and valid purchase date.</p><br />
<p>➛ Mobile Care also hold the right to ask for a receipt for proof of purchase.</p><br />
<p>➛ In the event that your device is stolen, lost, not paid off, and does not have a valid purchase, Mobile Care has the right to refuse purchase, in certain cases will contact Law Enforcement.</p><br />
<p>➛ If you the customer report the phone lost or stolen, Mobile Care will first contact you, failure to comply will result in Mobile Care reporting to local Law Enforcement.</p><br />
<p>➛ Mobile Care will validate your ID upon receiving the device.</p><br />
<p>➛ If you are under the age of 18, Mobile Care will not purchase any products from you. Parents and Guardians must be present.</p><br />

<p><b>NOTE: Mobile Care abides by all local laws and city ordinances within the state and city limits of location. Mobile Care does not tolerate dishonesty and stolen devices, and forgery of any such customer.</b> </p>


      </div>
      <ContractForm/>
    </div>
  )
}

export default Contract