import React from 'react';
import PropTypes from 'prop-types';
import { usePagination, DOTS } from './usePagination';
import { Box, Text, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { NextLink } from '..';

function Pagination(props) {
  const {
    isMobile,
    isHideDots,
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    isMobile,
    isHideDots,
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <HStack
      minWidth="100%"
      alignItems="center"
      className={className}
      spacing={isMobile ? '8px' : '20px'}
    >
      {/* Left navigation arrow */}
      {currentPage !== 1 && (
        <NextLink onClick={onPrevious}>
          <Box
            display="flex"
            bg="white"
            boxShadow="lg"
            border="1px"
            borderColor="gray.20"
            borderRadius="2em"
            alignItems="center"
            justifyContent="center"
            boxSize={isMobile ? 9 : 10}
          >
            <ChevronLeftIcon w={5} h={5} />
          </Box>
        </NextLink>
      )}

      {paginationRange.map((pageNumber, idx) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <Box
              key={idx}
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize={isMobile ? 5 : 10}
            >
              &#8230;
            </Box>
          );
        }

        // Render our Page Pills
        return (
          <Box key={idx}>
            {(pageNumber === currentPage && (
              <Box
                display="flex"
                bg="#ff731d"
                color="white"
                borderRadius="2em"
                alignItems="center"
                justifyContent="center"
                boxSize={isMobile ? 9 : 10}
              >
                <Text fontSize="md" fontWeight="normal">
                  {pageNumber}
                </Text>
              </Box>
            )) || (
              <Box
                display="flex"
                borderRadius="2em"
                alignItems="center"
                justifyContent="center"
                boxSize={isMobile ? 9 : 10}
              >
                <NextLink onClick={() => onPageChange(pageNumber)}>
                  <Text fontSize="md" fontWeight="normal">
                    {pageNumber}
                  </Text>
                </NextLink>
              </Box>
            )}
          </Box>
        );
      })}
      {/*  Right Navigation arrow */}
      {currentPage !== lastPage && (
        <NextLink onClick={onNext}>
          <Box
            display="flex"
            bg="white"
            boxShadow="lg"
            border="1px"
            borderColor="gray.20"
            borderRadius="2em"
            alignItems="center"
            justifyContent="center"
            boxSize={isMobile ? 9 : 10}
          >
            <ChevronRightIcon w={5} h={5} />
          </Box>
        </NextLink>
      )}
    </HStack>
  );
}

Pagination.propTypes = {
  isMobile: PropTypes.bool,
  isHideDots: PropTypes.bool,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;
