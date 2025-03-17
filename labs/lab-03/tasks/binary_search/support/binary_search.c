// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int binary_search(int *v, int len, int dest)
{
	int start = 0;
	int end = len - 1;
	int middle;

loop:
	if (start > end)
		return -1;
	middle = (start + end) / 2;
	if (v[middle] == dest)
		goto res;

	if (v[middle] > dest)
		goto smaller;
	
	start = middle + 1;
	goto loop;

smaller:
	end = middle - 1;
	goto loop;

res:
	return middle;
	return -1;
}
