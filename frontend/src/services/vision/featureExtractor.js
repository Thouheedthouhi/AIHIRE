// ---------------------------------------------
// AIHire - MediaPipe Feature Extractor
// ---------------------------------------------

// ---------------------------------------------
// Distance
// ---------------------------------------------

function distance(a, b) {
  return Math.sqrt(
    (a.x - b.x) ** 2 +
      (a.y - b.y) ** 2 +
      (a.z - b.z) ** 2
  );
}

// ---------------------------------------------
// Eye Aspect Ratio
// ---------------------------------------------

function calculateEAR(
  landmarks,
  indices
) {
  const p1 = landmarks[indices[0]];
  const p2 = landmarks[indices[1]];
  const p3 = landmarks[indices[2]];
  const p4 = landmarks[indices[3]];
  const p5 = landmarks[indices[4]];
  const p6 = landmarks[indices[5]];

  const vertical1 = distance(p2, p6);
  const vertical2 = distance(p3, p5);
  const horizontal = distance(p1, p4);

  return (
    (vertical1 + vertical2) /
    (2 * horizontal)
  );
}

// ---------------------------------------------
// Blendshape Helper
// ---------------------------------------------

function getBlendshapeScore(
  blendshapes,
  name
) {
  if (
    !blendshapes ||
    !blendshapes.categories
  ) {
    return 0;
  }

  const shape =
    blendshapes.categories.find(
      (item) =>
        item.categoryName === name
    );

  return shape ? shape.score : 0;
}

// ---------------------------------------------
// Face Center
// ---------------------------------------------

function calculateFaceCenter(
  landmarks
) {
  const nose = landmarks[1];

  return {
    x: nose.x,
    y: nose.y,
  };
}

// ---------------------------------------------
// Head Pose
// ---------------------------------------------

function calculateHeadPose(
  matrix
) {
  if (
    !matrix ||
    !matrix.data
  ) {
    return {
      yaw: 0,
      pitch: 0,
      roll: 0,
    };
  }

  const m = matrix.data;

  // Approximation using rotation matrix
  const yaw =
    Math.atan2(m[8], m[10]) *
    (180 / Math.PI);

  const pitch =
    Math.atan2(
      -m[9],
      Math.sqrt(
        m[8] * m[8] +
          m[10] * m[10]
      )
    ) *
    (180 / Math.PI);

  const roll =
    Math.atan2(m[1], m[5]) *
    (180 / Math.PI);

  return {
    yaw,
    pitch,
    roll,
  };
}

// ---------------------------------------------
// Main Feature Extraction
// ---------------------------------------------

export function extractFeatures({
  landmarks,
  blendshapes,
  matrix,
}) {
  if (!landmarks) {
    return null;
  }

  const LEFT_EYE = [
    33,
    160,
    158,
    133,
    153,
    144,
  ];

  const RIGHT_EYE = [
    362,
    385,
    387,
    263,
    373,
    380,
  ];

  const leftEAR =
    calculateEAR(
      landmarks,
      LEFT_EYE
    );

  const rightEAR =
    calculateEAR(
      landmarks,
      RIGHT_EYE
    );

  const ear =
    (leftEAR + rightEAR) / 2;

  const center =
    calculateFaceCenter(
      landmarks
    );

  const pose =
    calculateHeadPose(matrix);

  const leftBlink =
    getBlendshapeScore(
      blendshapes,
      "eyeBlinkLeft"
    );

  const rightBlink =
    getBlendshapeScore(
      blendshapes,
      "eyeBlinkRight"
    );

  const smile =
    (
      getBlendshapeScore(
        blendshapes,
        "mouthSmileLeft"
      ) +
      getBlendshapeScore(
        blendshapes,
        "mouthSmileRight"
      )
    ) / 2;

  const jawOpen =
    getBlendshapeScore(
      blendshapes,
      "jawOpen"
    );

  return {
    facePresent: true,

    eyeAspectRatio: ear,

    leftBlink,

    rightBlink,

    smileScore: smile,

    jawOpen,

    headYaw: pose.yaw,

    headPitch: pose.pitch,

    headRoll: pose.roll,

    faceCenterX: center.x,

    faceCenterY: center.y,
  };
}