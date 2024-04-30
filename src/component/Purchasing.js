import React from 'react'
import './Purchasing.css'
import PurchasingForm from './PurchasingForm'

const Purchasing = () => {
  return (
    <div>
      <div className="pur-box">

<h1>Customer Device Purchasing</h1>
<hr color='b' />
<br />
<p><b>All specifications on the contract are subject to the following terms and conditions. You agree to be bound to these terms when you sign below. These are the Terms and Conditions which you, the customer, agree to and are applicable to the purchase of your device by Mobile Care!</b></p>
<br />

<ul className='pur-list'>
  <li>1. You the customer understand that Mobile Care is selling this device to you in "AS IS" conditions.
 </li><br />
  <li>2. Devices come certified pre-owned with original parts, unless specified by Mobile Care otherwise.
</li><br />
<li>3 . All purchased devices come with a 30 Day warranty from Mobile Care.</li><br />
<li>4. If you the customer damage the device, then Mobile Care is not responsible, but we can offer you a discount on repairs!</li><br />
<li>5. All devices come carrier unlock!</li><br />
<li>6. Device Unlock information is available upon request.</li><br />
<li>7. Mobile Care is not responsible for carrier services that are not provided by us!</li><br />
<li>8. Device purchasing by Debit/Credit Card will be subject to a ID verification and signature!</li><br />
<li>9. Devices sold by cash will be checked for illegal tender!</li>
</ul>
<br />

<p><b>**Mobile Care abides by all local laws and city ordinances within the state and city limits of location. Mobile Care does not tolerate dishonesty and stolen devices, and forgery of any customer.**</b></p>

      </div>
      <PurchasingForm></PurchasingForm>
    </div>
  )
}


export default Purchasing;
