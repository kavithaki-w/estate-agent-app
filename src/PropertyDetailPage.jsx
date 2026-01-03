import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./PropertyDetailPage.css";
import { useParams } from "react-router-dom"
import data from "./properties.json";


function PropertyDetailPage(){
    const { id } = useParams(); //reading ID from URL

    // Find matching property
    const property = data.properties.find(
        p => p.id === id
    );

    if (!property) {
        return <strong>Page Not Found</strong>
    }

    const galleryImages = property.images.map((img, index) => ({
    original: img,
    thumbnail: img,
    description: `${property.name} - View ${index + 1}`,
    originalAlt: `${property.name} image ${index + 1}`,
    thumbnailAlt: `Thumbnail ${index + 1}`
  }));

  return(
    <div className="property-detail">
        <div className="detail-header">
        </div>

        <div className="property-title-section">
            <h1>{property.name}</h1>
            <p className="location">📍 {property.location}</p>
            <div className="property-meta">
                <span className="price">£{property.price.toLocaleString()}</span>
                <span className="bullet">•</span>
                <span>{property.tenure}</span>
                <span className="bullet">•</span>
                <span>{property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}</span>
                <span className="bullet">•</span>
                <span>{property.type}</span>
            </div>
        </div>

            <div className="gallery-wrapper">
                <ImageGallery
                items={galleryImages}
                showPlayButton={true}
                showFullscreenButton={true}
                showNav={true}
                showThumbnails={true}
                thumbnailPosition="right"
                slideOnThumbnailOver={false}
                showIndex={true}
                slideDuration={450}
                slideInterval={2000}
                lazyLoad={true}
                additionalClass="property-image-gallery"
                />
            </div>

             {/* ================= TABS SECTION ================= */}
            <Tabs className="property-tabs">
                <TabList>
                <Tab>Description</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Map</Tab>
                </TabList>

                {/* LONG DESCRIPTION */}
                <TabPanel>
                <p className="long-description">
                    {property.longDescription}
                </p>
                </TabPanel>

                {/* FLOOR PLAN */}
                <TabPanel>
                <div className="floorplan-wrapper">
                    <img
                    src={property.floorPlan}
                    alt="Floor Plan"
                    className="floor-plan"
                    />
                </div>
                </TabPanel>
            </Tabs>
                    
        </div>

  )
}

export default PropertyDetailPage