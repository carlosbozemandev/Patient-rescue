import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload as AntUpload, Form } from "antd";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { beforeUpload, getBase64 } from "utils";

const CustomUpload = ({ label, name, validationRules, imgUrl, additionalProps }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
  };

  const handleChange = async ({ fileList: newFileList }) => {
    if (newFileList?.length > 0) {
      const abc = beforeUpload(newFileList[0]);
      if (abc === false) {
        setFileList(newFileList);
      }
    } else {
      setFileList(newFileList);
    }
  };
  useEffect(() => {
    if (imgUrl) {
      setFileList([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: imgUrl,
        },
      ]);
    } else {
      setFileList([]);
    }
  }, [imgUrl]);

  return (
    <>
      <Form.Item name={name} rules={validationRules} label={label}>
        <AntUpload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
          maxCount={15}
          multiple
          {...additionalProps}
        >
          <div>
            <PlusOutlined />
            <div className="mt-2">Upload</div>
          </div>
        </AntUpload>
      </Form.Item>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" className="w-full" src={previewImage} />
      </Modal>
    </>
  );
};

CustomUpload.defaultProps = {
  label: "",
  validationRules: [{}],
  imgUrl: undefined,
  additionalProps: {},
};

CustomUpload.propTypes = {
  additionalProps: PropTypes.shape({}),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])),
  imgUrl: PropTypes.string,
};

export default CustomUpload;
