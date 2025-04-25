import { createBreakpoint } from 'react-use'
import { DisplayBreakpoints } from 'src/helpers/consts'

export const useBreakPoint = createBreakpoint({
	sliderBtnsPoint: 1450,
	L: DisplayBreakpoints.Lg,
	M: DisplayBreakpoints.Md,
	S: DisplayBreakpoints.Sm,
})
