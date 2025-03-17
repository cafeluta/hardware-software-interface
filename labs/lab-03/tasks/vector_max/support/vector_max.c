// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int vector_max(int *v, int len)
{
	int max;
	unsigned int i;

	i = 0;
	max = v[i];

loop:
	if (v[i] >= max)
		max = v[i];
	i++;
	if (i < len)
		goto loop;	

return max;
}
