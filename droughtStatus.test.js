// Importa las funciones que deseas probar
import { calculateMode} from "./src/components/selectMunicipality/DroughtStatusBar"

// Test para la función calculateMode
test('Calculate mode of values', () => {
  // Given
  const values = ['MOLT_SECA', 'SECA', 'NORMALITAT', 'NORMALITAT', 'MOLT_SECA'];

  // When
  const modeValue = calculateMode(values);

  // Then
  expect(modeValue).toBe('NORMALITAT');
});
