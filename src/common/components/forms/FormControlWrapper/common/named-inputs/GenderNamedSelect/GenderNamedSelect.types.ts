import { SelectProps } from 'common/components/forms/custom-inputs/Select/Select.types'

export interface GenderNamedSelectProps
    extends Omit<SelectProps, 'name' | 'options'> {}
