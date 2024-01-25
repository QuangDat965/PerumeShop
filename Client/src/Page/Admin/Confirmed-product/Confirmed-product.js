import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Tag,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import { NumericFormat } from 'react-number-format';

const ConfirmedProduct = () => {
  const staticData = [
    // Your static data here
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Khách hàng</TableCell>
            <TableCell>Sản phẩm nước hoa</TableCell>
            <TableCell>Ngày mua</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Người xác nhận</TableCell>
            <TableCell>Ngày xử lý</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staticData.map((record) => (
            <React.Fragment key={record.id}>
              <TableRow>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record?.KhachHang?.HoVaTen}</TableCell>
                <TableCell>{record?.NuocHoa?.TenSanPham}</TableCell>
                <TableCell>{moment(record?.NgayMua).format('HH:mm A, DD-MM-YYYY')}</TableCell>
                <TableCell>{record.TrangThai}</TableCell>
                <TableCell>{record?.NguoiQuanLy?.HoVaTen}</TableCell>
                <TableCell>{moment(record?.NgayXuLy).format('HH:mm A, DD-MM-YYYY')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={7}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Chi tiết</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      {/* Your detailed content here */}
                      <Typography>Details go here...</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConfirmedProduct;