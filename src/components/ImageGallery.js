import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { useNavbarContext } from "../contexts/NavbarContext";

const ImageGallery = ({ screenshots }) => {
	let { screenshotsCaption, disable, info, imageFolderName } = screenshots;
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [images, setImages] = useState([]);
	//use the navbar context here to set the fixedTop state to false when the gallery is open
	const { setFixedTop } = useNavbarContext();

	useEffect(() => {
		const loadImages = async () => {
			let loadedImages = [];
			for (let i = 0; i <= 15; i++) {
				try {
					// Assuming the images are stored in `/public/assets/[imageFolderName]/` and accessible via a public URL
					const image = await import(`/src/assets/${imageFolderName}/${i}.png`);
					loadedImages.push(image.default);
				} catch (error) {
					// console.error(`Failed to load image${i}`, error);
				}
			}
			setImages(loadedImages);
		};

		if(imageFolderName){
			loadImages();
		}
	}, [imageFolderName]); // Re-run if imageFolderName changes

	const handleOpenGalleryClick = () => {
		if (!disable) {
			setIsOpen(true);
			setFixedTop(false);
		}
	};

	const handleGalleryCloseRequest = () => {
		setIsOpen(false);
		setFixedTop(true);
	}; 	

	return (
		<div>
			<button
				className={`btn border transparent btn-sm d-inline-flex justify-content-center align-items-center ${
					disable && "inactive"
				}`}
				data-bs-toggle="tooltip"
				data-bs-placement="top"
				data-bs-title={info ?? null}
				onClick={handleOpenGalleryClick}
			>
				{disable && <span class="material-symbols-outlined fs-6 me-1 text-danger">hide_source</span>}

				<span>Screenshots</span>
			</button>

			{isOpen && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={handleGalleryCloseRequest}
					onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
					imageCaption={`${screenshotsCaption}${photoIndex + 1}`} // Add this line to show the title or caption
				/>
			)}
		</div>
	);
};

export default ImageGallery;
