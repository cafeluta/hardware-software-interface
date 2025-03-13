// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "iterate.h"
#include "array.h"

void print_chars(void)
{
	unsigned char* p = (unsigned char*) v;
	int len = sizeof(v);

	for (int i = 0; i < len; i++) {
		printf("%p -> 0x%x\n", (p + i), *(p + i));		
	}
	printf("-------------------------------\n");
}

void print_shorts(void)
{
	unsigned short* p = (unsigned short*) v;
	int len = sizeof(v) / sizeof(short);

	for (int i = 0; i < len; i++) {
		printf("%p -> 0x%x\n", (p + i), *(p + i));		
	}
	printf("-------------------------------\n");
}

void print_ints(void)
{
	unsigned int* p = (unsigned int*) v;
	int len = sizeof(v) / sizeof(int);

	for (int i = 0; i < len; i++) {
		printf("%p -> 0x%x\n", (p + i), *(p + i));		
	}
	printf("-------------------------------\n");
}
