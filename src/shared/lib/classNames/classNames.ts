type Mods = Record<string, boolean>

//* eslint disable *//
export function classNames(
	cls: string,
	mods: Mods = {},
	additional?: Array<string | undefined>
): string {
	return [
		cls,
		...(Array.isArray(additional) ? additional.filter(Boolean) : []),
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className)
	].join(' ')
}
