// SPDX-License-Identifier: BSD-3-Clause

#include <stddef.h>
#include <string.h>

#include "pointers.h"

int my_strcmp(const char *s1, const char *s2)
{
	if (strlen(s1) != strlen(s2)) {
		return -1;
	}
	while (*s1 == *s2) {
		if (*s1 == '\0')
			return 0;
		s1++;
		s2++;
	}

	return *(unsigned char*) s1 - *(unsigned char*) s2;
}

void *my_memcpy(void *dest, const void *src, size_t n)
{
	unsigned char* d = (unsigned char*) dest;
	const unsigned char* s = (const unsigned char*) src;

	if (d > s && d < s + n) {  // overlap
		s += n;
		d += n;
		while (n--) {
			*(d--) = *(s--);
		}
	} else {
		while (n--) {
			*(d++) = *(s++);
		}
	}

	return dest;
}

char *my_strcpy(char *dest, const char *src)
{
	while (*src != '\0') {
		*dest = *src;
		dest++;
		src++;
	}
	*dest = '\0';

	return dest;
}
