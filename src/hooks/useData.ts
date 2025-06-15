
import { useQuery } from '@tanstack/react-query';
import { dataService } from '@/services/dataService';

export const useNewsEvents = () => {
  return useQuery({
    queryKey: ['newsEvents'],
    queryFn: () => dataService.getNewsEvents(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useBanners = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: () => dataService.getBanners(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });
};

export const useMarqueeTexts = () => {
  return useQuery({
    queryKey: ['marqueeTexts'],
    queryFn: () => dataService.getMarqueeTexts(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });
};
