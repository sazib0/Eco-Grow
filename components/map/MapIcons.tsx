import React from 'react';
import { TreeDeciduous, Leaf } from 'lucide-react';
import { LocationType } from '../../types/location';

interface IconProps {
  className?: string;
}

export const TreeIcon = ({ className }: IconProps) => (
  <TreeDeciduous className={className} />
);

export const DurstIcon = ({ className }: IconProps) => (
  <Leaf className={className} />
);

export const getIconByType = (type: LocationType, className?: string) => {
  return type === 'tree' ? 
    <TreeIcon className={className} /> : 
    <DurstIcon className={className} />;
};