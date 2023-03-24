import { useRef } from 'react';
import Slider from 'react-slick';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';
import Image from '../Image';
import TextMaxLine from '../TextMaxLine';
import { CarouselDots, CarouselArrows } from '../carousel';

export default function MenuCarousel({ products, numberShow, sx }: any) {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: numberShow,
    slidesToScroll: numberShow,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
  };

  const handlePrevious = () => {
    (carouselRef.current as any)?.slickPrev();
  };

  const handleNext = () => {
    (carouselRef.current as any)?.slickNext();
  };

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <CarouselArrows
        filled
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{
          '& .arrow button': {
            p: 0,
            width: 24,
            height: 24,
            top: -20,
          },
        }}
      >
        <Slider ref={carouselRef} {...settings}>
          {products.map((product: any) => (
            <Box key={product.name} sx={{ px: 1, textAlign: 'center' }}>
              <NextLink href={product.path} passHref>
                <Link
                  color="inherit"
                  underline="none"
                  sx={{
                    display: 'block',
                    transition: (theme) => theme.transitions.create('all'),
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  <Image
                    alt={product.image}
                    src={product.image}
                    ratio="1/1"
                    disabledEffect
                    sx={{ borderRadius: 1, mb: 1 }}
                  />
                  <TextMaxLine line={2} variant="caption" sx={{ fontWeight: 'fontWeightMedium' }}>
                    {product.name}
                  </TextMaxLine>
                </Link>
              </NextLink>
            </Box>
          ))}
        </Slider>
      </CarouselArrows>
    </Box>
  );
}
