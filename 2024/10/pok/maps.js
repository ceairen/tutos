export const TerrainTypes = {
  GRASS: 0,
  DEFAULT: 1,
  HOUSE: 2,
  FOREST: 3,
  WATER: 4,
  HOUSE_DOOR: 5,
};

export const unReachableTerrainTypes = [
  TerrainTypes.WATER,
  TerrainTypes.HOUSE,
  TerrainTypes.FOREST,
];

export function getColorByTerrainType(terrainType) {
  let color = "lightgray";
  switch (terrainType) {
    case TerrainTypes.GRASS:
      color = "#88971F";
      break;
    case TerrainTypes.DEFAULT:
      color = "#F0DEB3";
      break;
    case TerrainTypes.HOUSE:
      color = "#DAD3CB";
      break;
    case TerrainTypes.HOUSE_DOOR:
      color = "#bfb8b1";
      break;
    case TerrainTypes.FOREST:
      color = "#38672E";
      break;
    case TerrainTypes.WATER:
      color = "blue";
      break;
  }
  return color;
}

const bourgPaletteCenter = [
  [
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE_DOOR,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE_DOOR,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE_DOOR,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.HOUSE,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.DEFAULT,
    TerrainTypes.GRASS,
  ],
  [
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.WATER,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
    TerrainTypes.GRASS,
  ],
];

function addBorder(map, borderSize = 3) {
  const borderRow = Array(map[0].length + borderSize * 2).fill(
    TerrainTypes.FOREST
  );

  const borderedMap = [
    ...Array(borderSize).fill(borderRow),
    ...map.map((row) => [
      ...Array(borderSize).fill(TerrainTypes.FOREST),
      ...row,
      ...Array(borderSize).fill(TerrainTypes.FOREST),
    ]),
    ...Array(borderSize).fill(borderRow),
  ];

  return borderedMap;
}

export const mapBourgPalette = addBorder(bourgPaletteCenter);

export function generateFullMap(...maps) {
  return maps.reduce((fullMap, currentMap) => {
    const mapHeight = fullMap.length;
    const currentMapWidth = currentMap[0].length;

    if (mapHeight && mapHeight % currentMap.length !== 0) {
      const paddingRows = Array(currentMap.length).fill(
        Array(currentMapWidth).fill(TerrainTypes.FOREST)
      );
      fullMap.push(...paddingRows);
    }

    fullMap.push(...currentMap);
    return fullMap;
  }, []);
}

export const fullMap = generateFullMap(mapBourgPalette);
