import React from "react";
import { Helmet } from "react-helmet-async";
import shippinganddelivery from "../../assets/Thumbnails.png";

const title = "Shipping & Delivery Policy | Leor Media";
const description =
  "Read Leor Media's Shipping & Delivery Policy. Learn how we handle product and service deliveries, timelines, and fulfillment procedures.";
const keywords =
  "shipping policy, delivery policy, Leor Media, service delivery, fulfillment policy, Visakhapatnam digital agency";
const ogImage = shippinganddelivery;
const canonical = "https://leormedia.com/Legal/shipping-and-delivery";

const ShippingandDelivery = () => {
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

      <div className="disclaimer px-5 mt-6 text-black mx-4">
        <h1 className="text-center text-2xl py-10 font-bold">
          Shipping & Delivery Policy
        </h1>
        <p>Last updated: 2022-11-01</p>
        <br />
        <p className="text-lg font-medium">
          Shipping is not applicable for our business.
        </p>
      </div>
    </>
  );
};

export default ShippingandDelivery;
