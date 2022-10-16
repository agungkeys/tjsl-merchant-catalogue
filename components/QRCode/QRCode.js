import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { QRCodeCanvas } from 'qrcode.react';
import { HiQrcode } from 'react-icons/hi';

function QRCode(props) {
  const {
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
      <Button onClick={onOpen} variant="unstyled">
        <HiQrcode size="32px" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>QRCODE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center">
              <QRCodeCanvas
                value={value}
                size={size}
                imageSettings={imageSettings}
              />
            </Flex>
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
