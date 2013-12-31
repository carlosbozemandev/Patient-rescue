import { Table as AntTable } from "antd";
import PropTypes from "prop-types";

const Table = ({
  columns,
  dataSource,
  isLoading,
  totalSize,
  pageSize,
  onPageChange,
  rowId,
  additionalProps,
}) => (
  <AntTable
    rowKey={rowId}
    columns={columns}
    dataSource={dataSource}
    loading={isLoading}
    pagination={{
      total: totalSize,
      pageSize,
      showSizeChanger: true,
      onChange: (page, size) => {
        onPageChange(page, size);
      },
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    }}
    {...additionalProps}
  />
);
Table.defaultProps = {
  dataSource: [],
  isLoading: false,
  totalSize: 0,
  pageSize: 10,
  onPageChange: () => {},
  rowId: "id",
  additionalProps: {},
};
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
  onPageChange: PropTypes.func,
  totalSize: PropTypes.number,
  pageSize: PropTypes.number,
  rowId: PropTypes.string,
  additionalProps: PropTypes.shape({}),
};

export default Table;
