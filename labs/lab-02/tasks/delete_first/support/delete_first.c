// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "delete_first.h"

char *delete_first(char *s, char *pattern)
{
	char* p = strstr(s, pattern);
	if (!p) {
		return strdup(s);
	}

	char* res = malloc(strlen(s) + 1 - strlen(pattern));
	if (!res) {
		return NULL;
	}

	strncpy(res, s, p - s);
	strcpy(res + (p - s), p + strlen(pattern));
	return res;
}
