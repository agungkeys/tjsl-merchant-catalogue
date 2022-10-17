import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { QRCodeCanvas } from 'qrcode.react';
import { HiQrcode } from 'react-icons/hi';

function QRCode(props) {
  const {
    isMobile,
    value,
    renderAs,
    size,
    bgColor,
    fgColor,
    level,
    includeMargin,
    imageSettings,
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box onClick={onOpen} cursor="pointer">
        {<HiQrcode size={isMobile ? '24px' : '40px'} />}
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={isMobile ? 'full' : 'md'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>QRCODE</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <QRCodeCanvas
              value={value}
              size={size}
              imageSettings={imageSettings}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="messenger" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

QRCode.propTypes = {
  isMobile: PropTypes.bool,
  value: PropTypes.string,
  renderAs: PropTypes.string,
  size: PropTypes.number,
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.string,
  includeMargin: PropTypes.bool,
  imageSettings: PropTypes.object,
};

export default QRCode;
