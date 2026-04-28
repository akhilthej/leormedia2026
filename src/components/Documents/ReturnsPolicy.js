import React from 'react';

import { Helmet } from "react-helmet-async";
import shippinganddelivery from "../../assets/Thumbnails.png";


const title = "Return Policy | Leor Media";
const description =
  "Read Leor Media's Return Policy to learn about product returns, refunds, and exchange procedures. Ensure a smooth experience with our services.";
const keywords =
  "return policy, Leor Media, product returns, refunds, exchanges, service policies, Visakhapatnam digital agency";

const ogImage = shippinganddelivery;
const canonical = "https://leormedia.com/Legal/returns-policy";


const ReturnsPolicy = () => {
  return (
    <>
       <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Leor Media" />
            <meta name="language" content="en" />
            <meta name="distribution" content="global" />
    
            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
    
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
    
            {/* Canonical Link */}
            <link rel="canonical" href={canonical} />
          </Helmet>

    <div className='disclaimer px-5 mt-6 text-black mx-4'>
    <h1 className='text-center text-2xl py-10 font-bold'> Cancellation & Refund Policy </h1>
Last updated: 2022-11-01<br/><br/>
<p className="text-lg font-medium">Leor Media (CSD) believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p><br />

<li className="py-2">Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>

<li className="py-2">Leor Media (CSD) does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>

<li className="py-2">In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products.</li>

<li className="py-2">In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>

<li className="py-2">In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>

<li className="py-2">In case of any Refunds approved by the Leor Media (CSD), it’ll take 1-2 days for the refund to be processed to the end customer.</li>

</div>
</>
  )
}

export default ReturnsPolicy