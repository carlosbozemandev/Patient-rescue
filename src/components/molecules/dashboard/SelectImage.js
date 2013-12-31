import { Form, Upload as AntUpload, Button, Logo } from "components";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { beforeUpload, getBase64 } from "utils/imageUtils";
import listingPageCardImage from "assets/images/listing-card.svg";

// Add more custom props as per need
const SelectImage = ({ label }) => {
  const [UploadImage, setUploadImage] = useState(listingPageCardImage);

  const handleImageChange = (info) => {
    if (info.fileList.length >= 0) {
      getBase64(info.fileList[0].originFileObj, (imageUrl) => setUploadImage(imageUrl));
    }
  };

  return (
    <Form.Item label={label}>
      <div className="text-center">
        <div className="bg-gray">
          <Logo image={UploadImage} altText="avatar" additionalProps={{ className: "w-250" }} />
          <div className="absolute bottom-20 right-20">
            <AntUpload
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleImageChange}
            >
              <Button text="Upload" />
            </AntUpload>
          </div>
        </div>
      </div>
    </Form.Item>
  );
};

SelectImage.defaultProps = {
  label: "",
};

SelectImage.propTypes = {
  label: PropTypes.string,
};

export default SelectImage;
