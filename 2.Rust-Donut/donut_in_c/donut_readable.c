#include <stdio.h>
#include <string.h>
#include <math.h>

int main() {
    // Rotationswinkel
    float A = 0.0f;
    float B = 0.0f;

    // Output-Puffer
    char buffer[1760];
    float zbuffer[1760];

    printf("\x1b[2J"); // Bildschirm löschen

    for (;;) { // Endlosschleife
        memset(buffer, ' ', sizeof(buffer));
        memset(zbuffer, 0, sizeof(zbuffer));

        // Zwei Rotationsparameter: um i und j drehen
        for (float j = 0; j < 2 * M_PI; j += 0.07f) {
            for (float i = 0; i < 2 * M_PI; i += 0.02f) {

                float sin_i = sinf(i);
                float cos_i = cosf(i);
                float sin_j = sinf(j);
                float cos_j = cosf(j);

                float sinA = sinf(A);
                float cosA = cosf(A);
                float sinB = sinf(B);
                float cosB = cosf(B);

                float circleX = cos_i;
                float circleY = sin_i;

                float h = cos_j + 2.0f;
                float D = 1.0f / (circleY * h * sinA + sin_j * cosA + 5.0f);

                float t = circleY * h * cosA - sin_j * sinA;

                int x = (int)(40 + 30 * D * (circleX * h * cosB - t * sinB));
                int y = (int)(12 + 15 * D * (circleX * h * sinB + t * cosB));

                int o = x + 80 * y;

                float luminance = 
                    8 * ((sin_j * sinA - circleY * cos_j * cosA) * cosB
                    - circleY * cos_j * sinA
                    - cos_i * cos_j * sinB);

                int L = (int)(luminance > 0 ? luminance : 0);

                if (y > 0 && y < 22 && x > 0 && x < 80 && D > zbuffer[o]) {
                    zbuffer[o] = D;
                    buffer[o] = ".,-~:;=!*#$@"[L];
                }
            }
        }

        printf("\x1b[H"); // Cursor nach oben
        for (int k = 0; k < 1760; k++) {
            putchar(k % 80 ? buffer[k] : '\n');
        }

        A += 0.04f;
        B += 0.02f;
    }

    return 0;
}
